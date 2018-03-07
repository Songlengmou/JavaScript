(function () {

    //①
    // var numsTarget = {};
    // var nums = new Proxy(numsTarget, {
    //     get: function (target, property) {
    //         return target[property] || 0;
    //     }
    // });
    // // nums.scale = 100;
    // console.log(nums.scale);

    //② 权限预检查
    function requireAdminRole(f) {
        return new Proxy(f, {
            apply: function (target, thisArg) {
                if (thisArg.role === "admin") {
                    target.call(thisArg);
                } else {
                    console.error("Access denied");
                }
            }
        });
    }

    let user = {
        // role: "admin",
        role: "normal",
        name: "Song",
        deleteContent: requireAdminRole(function () {
            console.log("Delete content");
        })
    };

    user.deleteContent();
})();
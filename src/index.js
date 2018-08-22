export default {
    isFn: true,
    bind: function (el, binding, vNode) {
        let obj = {
            timer: null,
            speed: 200
        }
        if (binding.arg !== null && binding.arg !== undefined) {
            obj.speed = binding.arg;
        }
        el.hover = obj;
        el.addEventListener('mouseover', function () {
            obj = el.hover;
            if (obj.timer === null) {
                obj.timer = setTimeout(function () {
                    binding.value();
                }, obj.speed);
                el.hover = obj;
            }
        });
        el.addEventListener('mouseleave', function () {
            obj = el.hover;
            if (obj.timer !== null) {
                clearTimeout(obj.timer);
            }
            obj.timer = null;
            el.hover = obj;
        });
    },
    unbind: function (el) {
        let obj = state.get(el);
        if (obj.timer !== null) {
            clearTimeout(obj.timer);
        }
        obj.timer = null;
        el.hover = obj;
    }
}
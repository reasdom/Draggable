$(document).ready(function () {
    $(function () {
        $("#itemTable tbody").sortable({
        });
    });

    const app = new Vue({
        el: "#app",
        data: {
            items: [{
                "order": 0,
                "name": "Item 0"
            }]
        },
        methods: {
            addItem: function () {
                var order = this.items.length;
                Vue.set(app.items, order, {
                    "order": order,
                    "name": "Item " + order
                });
            }
        }
    });
});
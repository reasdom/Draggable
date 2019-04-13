$(document).ready(function () {

    $(function () {
        $("#itemTable tbody").sortable({
            update: function (event, ui) {
                app.updateOrders();
            }
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
            },
            updateOrders: function () {
                var newOrder = $('#itemTable tbody').sortable("toArray");
                $("#itemTable tbody").sortable("cancel");
                var newItemList = [];
                for (var i = 0; i < newOrder.length; i++) {
                    if (this.items[parseInt(newOrder[i].replace("item-", ''))] != null) {
                        newItemList.push({
                            "order": i,
                            "name": this.items[parseInt(newOrder[i].replace("item-", ''))].name,
                        });
                    }
                }
                this.items = newItemList;
            }
        }
    });
});

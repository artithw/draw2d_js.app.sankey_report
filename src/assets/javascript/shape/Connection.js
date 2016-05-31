var DEFAULT_ROUTER= new draw2d.layout.connection.SplineConnectionRouter();

sankey.shape.Connection = draw2d.Connection.extend({
    NAME : "sankey.shape.Connection",

    init:function(attr, setter, getter)
    {
        this._super(attr, setter, getter);

        this.label = new draw2d.shape.basic.Label({
            text:"-",
            bgColor:"#FFFFFF",
            radius:3
        });

        this.add(this.label, new draw2d.layout.locator.ManhattanMidpointLocator());

        this.attr({
            router: DEFAULT_ROUTER,
            stroke:5,
            userData: {
                jsonPath:""
            }
        });

        this.setTargetDecorator(new draw2d.decoration.connection.ArrowDecorator());
    },

    setText:function(text)
    {
        this.label.setText(text);
    }
});
tool.minDistance = 10;
tool.maxDistance = 45;
var myPath;
var rgbColor;

function onMouseDown(event) {
    if (usedTool == 1) {
        myPath = new Path();

        //Farbvariation
        myPath.fillColor = {
            hue: Math.random() * 360,
            saturation: 1,
            brightness: 1
        };

        myPath.add(event.point);
    }
    if(usedTool == 2){
        myPath = new Path();
        myPath.strokeColor = '#000000';
        myPath.strokeWidth = 5;
        myPath.add(event.point);
    }
}

function onMouseDrag(event) {
    if (usedTool == 1) {
        var step = event.delta / 2;
        step.angle += 90;

        var top = event.middlePoint + step;
        var bottom = event.middlePoint - step;

        myPath.add(top);
        myPath.insert(0, bottom);
        myPath.smooth();
    }
    if(usedTool == 2){
        myPath.add(event.point);
        myPath.smooth();
    }

} 

function onMouseUp(event) {
    if (usedTool == 1) {
        myPath.add(event.point);
        myPath.closed = true;
        myPath.smooth();
    }
}
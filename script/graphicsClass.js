/**
 * Created by chrischang on 15/8/1.
 */
function Graphic(width, height){
    this.width = width;
    this.height = height;
    this.graphic = createGraphics(width+5, height+5);
    this.graphic.smooth();
    this.graphic.strokeWeight(2);
    this.triangleBottomY = 0;
    this.angle = 0;
    this.fill = '#000';
    this.graphic.translate(1,1);
}
Graphic.prototype.getWidth = function(){
    return this.width;
};
Graphic.prototype.getHeight = function () {
    return this.height;
};
Graphic.prototype.setStroke = function(strokeColor){
    this.graphic.stroke(strokeColor);
};
Graphic.prototype.setFill = function(fill){
    this.fill = fill;
    this.graphic.fill(fill);
};
Graphic.prototype.setStrokeWeight = function(strokeWeight){
    this.graphic.strokeWeight(4);
};
Graphic.prototype.getGraphic = function(){
  return this.graphic;
};
Graphic.prototype.drawA = function () {

    this.graphic.line(0, this.height, this.width / 2, 0);
    this.graphic.line(this.width / 2, 0, this.width, this.height);
};
Graphic.prototype.drawR = function () {
    this.graphic.line(0, this.height, 0, 0);
    this.graphic.line(0, 0, this.width, 0);
    this.graphic.line(this.width, 0, this.width, this.height / 2);
    this.graphic.line(this.width, this.height / 2, 0, this.height / 2);
    this.graphic.line(this.width / 2, this.height / 2, this.width, this.height);
};
Graphic.prototype.drawC = function () {
    this.graphic.line(this.width, 10, this.width, 0);
    this.graphic.line(this.width, 0, 0, 0);
    this.graphic.line(0, 0, 0, this.height);
    this.graphic.line(0, this.height, this.width, this.height);
    this.graphic.line(this.width, this.height, this.width, this.height - 10);
};
Graphic.prototype.drawF = function () {
    this.graphic.line(0, this.height, 0, 0);
    this.graphic.line(0, 0, this.width, 0);
    this.graphic.line(0, this.height / 2, this.width, this.height / 2);
};
Graphic.prototype.draw2 = function () {
    this.graphic.line(0, 0, this.width, 0);
    this.graphic.line(this.width, 0, this.width, this.height / 2);
    this.graphic.line(this.width, this.height / 2, 0, this.height / 2);
    this.graphic.line(0, this.height / 2, 0, this.height);
    this.graphic.line(0, this.height, this.width, this.height);
};
Graphic.prototype.drawE = function () {
    this.graphic.line(this.width, 0, 0, 0);
    this.graphic.line(0, 0, 0, this.height);
    this.graphic.line(0, this.height, this.width, this.height);
    this.graphic.line(0, this.height / 2, this.width, this.height / 2);
};
Graphic.prototype.drawTriangle = function(){
    var triangleOffsetX = this.width / 2 - (this.width / 2 * this.triangleBottomY / this.height);
    this.graphic.triangle(this.width / 2, 0, triangleOffsetX, this.triangleBottomY, this.width - triangleOffsetX, this.triangleBottomY);
    this.triangleBottomY = Math.abs((this.height - 30) * Math.sin(this.angle * 0.017453293));
    this.angle += 1;
};



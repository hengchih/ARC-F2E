/**
 * Created by chrischang on 15/8/1.
 */
function RunningBall(width, height){
    this.width = width;
    this.height = height;
    this.r = 15;
    this.graphic = createGraphics(width, height);
    this.graphic.smooth();
    this.graphic.fill('#FF1493');
    this.graphic.ellipse(this.r, this.height / 2, this.r, this.r);
    this.angle = 0;
}

RunningBall.prototype.getGraphic = function(){
  return this.graphic;
};

RunningBall.prototype.run = function(){
    this.graphic.clear();
    this.graphic.noStroke();
    var triangleOffsetX = Math.abs((this.width - this.r) * Math.sin(this.angle * 0.017453293));
    this.graphic.ellipse(triangleOffsetX, this.height / 2, this.r, this.r);
    this.angle += 1;
};
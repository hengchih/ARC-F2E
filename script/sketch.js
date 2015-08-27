/**
 * Created by chrischang on 15/7/30.
 */
var arc = {a: null, r: null, c: null, triangle: null};
var f2e = {f: null, _2: null, e: null, runningBall: null};
var ball = [{}, {}, {}];
var _PIA = 0.017453293;
var _arcC = '#0CFFFE';
var _f2eC = '#FF1493';
var frame = 1;
var _size = 150;
var memberImage, activityImage, erpv2Image, search1Image, search2Image, orderImage;
var f2eWaveR = 50;
var f2eWaveP1 = {x: 0, y: 0}, f2eWaveP2 = {x: 0, y: 0}, f2eWaveP3 = {x: 0, y: 0}, f2eWaveP4 = {x: 0, y: 0};
var f2eWaveP5 = {x: 0, y: 0}, f2eWaveP6 = {x: 0, y: 0}, f2eWaveP7 = {x: 0, y: 0}, f2eWaveP8 = {x: 0, y: 0};
var f2eWaveAngle = 0;
var f2eWaveAnglePI = 0;
var showF2ePicture = 0;
var showFe2PictureSize = 5;
var imageSize = 0;
var lock = false;
var backStep = 10;
var arcWaveSize = 0;
var arcWaveAngle = 0;
var showArcPicture = 0;
var showArcPictureSize = 5;
var showOrderPicture = 0;
var showOrderPictureSize = 5;

var s4 = [];

function preload() {
    memberImage = loadImage('content/image/member.png');
    activityImage = loadImage('content/image/member.png');
    erpv2Image = loadImage('content/image/member.png');
    search1Image = loadImage('content/image/member.png');
    search2Image = loadImage('content/image/member.png');
    orderImage = loadImage('content/image/member.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    initArc();
    initF2e();
    initLink();
}

function draw() {
    var c;
    switch (frame) {
        case 1:
            scene1();
            break;
        case 2:
            scene2();
            break;
        case 3:
            scene3();
            break;
        case 4:
            scene4();
            break;
        default :
            scene1();
            fill(_arcC);
            textSize(14);
            text("THE END", 160, -5);
            break;
    }
}

function scene1() {
    c = Math.floor(40 * Math.random());
    background('rgba(' + c + ', ' + c + ',' + c + ',0.3)');
    fill(_arcC);
    stroke(50);
    drawLink();
    translate(windowWidth / 2, windowHeight / 2);
    drawArc();
    drawF2e();
}

function scene2() {
    backStep += 1;
    if (backStep < 100) {
        background(30, backStep);
    } else {
        background(30, 40);
    }
    textSize(20);
    translate(windowWidth / 2, windowHeight / 2);
    noFill();
    stroke(100);
    triangle(50 * Math.cos(270 * _PIA), 50 * Math.sin(270 * _PIA), 50 * Math.cos(30 * _PIA), 50 * Math.sin(30 * _PIA), 50 * Math.cos(150 * _PIA), 50 * Math.sin(150 * _PIA));
    fill(_arcC);
    textFont('Jura');
    text("ARC", -22, 8);

    noFill();

    if (!lock) {
        triangle(
            (50 + windowWidth / 2.5 * Math.sin(arcWaveSize * _PIA)) * Math.cos((270 + arcWaveAngle) * _PIA),
            (50 + windowWidth / 2.5 * Math.sin(arcWaveSize * _PIA)) * Math.sin((270 + arcWaveAngle) * _PIA),
            (50 + windowWidth / 2.5 * Math.sin(arcWaveSize * _PIA)) * Math.cos((30 + arcWaveAngle) * _PIA),
            (50 + windowWidth / 2.5 * Math.sin(arcWaveSize * _PIA)) * Math.sin((30 + arcWaveAngle) * _PIA),
            (50 + windowWidth / 2.5 * Math.sin(arcWaveSize * _PIA)) * Math.cos((150 + arcWaveAngle) * _PIA),
            (50 + windowWidth / 2.5 * Math.sin(arcWaveSize * _PIA)) * Math.sin((150 + arcWaveAngle) * _PIA)
        );
        arcWaveSize += 1;
        arcWaveAngle += 2;
    }

    if (showArcPicture === 1 && showArcPictureSize > 5) {
        image(search1Image, -showArcPictureSize / 2, -showArcPictureSize * 0.55 / 2, showArcPictureSize, showArcPictureSize * 0.55);
    }
    if (showArcPicture === 3 && showArcPictureSize > 5) {
        image(search2Image, -showArcPictureSize / 2, -showArcPictureSize * 0.55 / 2, showArcPictureSize, showArcPictureSize * 0.55);
    }

    if (showArcPicture % 2 != 0) {
        if (showArcPictureSize < windowWidth / 1.5) {
            showArcPictureSize += 15;
        } else {
            lock = true;
        }
    }

}

function scene3() {
    if (f2eWaveAnglePI % 50 == 0 && showF2ePicture % 2 == 0) {
        background(100, 50);
    } else {
        background(30, 20);
    }

    translate(windowWidth / 2, windowHeight / 2);
    noFill();
    stroke(50);
    ellipse(0, 0, 80, 80);
    stroke(70 + 10 * Math.random());
    strokeWeight(3 * Math.random());
    //if (f2eWaveAnglePI % 2 == 0) {
    //    ellipse(0, 0, 50 + windowWidth * Math.sin(f2eWaveAnglePI), 50 + windowWidth * Math.sin(f2eWaveAnglePI));
    //}
    stroke(50);
    ////if (f2eWaveR > windowWidth) f2eWaveR = 50;
    ellipse(0, 0, f2eWaveR, f2eWaveR);
    fill(_f2eC);
    if (!lock) {
        f2eWaveP1.x = getF2eWavePointX(-f2eWaveAnglePI, f2eWaveR / 2);
        f2eWaveP1.y = getF2eWavePointY(-f2eWaveAnglePI, f2eWaveR / 2);
        f2eWaveP2.x = getF2eWavePointX(f2eWaveAnglePI, f2eWaveR / 2);
        f2eWaveP2.y = getF2eWavePointY(f2eWaveAnglePI, f2eWaveR / 2);
        f2eWaveP3.x = getF2eWavePointX(180 + f2eWaveAnglePI, f2eWaveR / 2);
        f2eWaveP3.y = getF2eWavePointY(180 + f2eWaveAnglePI, f2eWaveR / 2);
        f2eWaveP4.x = getF2eWavePointX(180 - f2eWaveAnglePI, f2eWaveR / 2);
        f2eWaveP4.y = getF2eWavePointY(180 - f2eWaveAnglePI, f2eWaveR / 2);
        ellipse(f2eWaveP1.x, f2eWaveP1.y, 10, 10);
        ellipse(f2eWaveP2.x, f2eWaveP2.y, 10, 10);
        ellipse(f2eWaveP3.x, f2eWaveP3.y, 10, 10);
        ellipse(f2eWaveP4.x, f2eWaveP4.y, 10, 10);
        strokeWeight(1);
        line(f2eWaveP1.x, f2eWaveP1.y, getF2eWavePointX(-Math.abs(f2eWaveAnglePI), 25), getF2eWavePointY(-Math.abs(-f2eWaveAnglePI), 25));
        line(f2eWaveP2.x, f2eWaveP2.y, getF2eWavePointX(-Math.abs(f2eWaveAnglePI), 25), getF2eWavePointY(-Math.abs(f2eWaveAnglePI), 25));
        line(f2eWaveP3.x, f2eWaveP3.y, getF2eWavePointX(-Math.abs(180 + f2eWaveAnglePI), 25), getF2eWavePointY(-Math.abs(180 + f2eWaveAnglePI), 25));
        line(f2eWaveP4.x, f2eWaveP4.y, getF2eWavePointX(-Math.abs(180 - f2eWaveAnglePI), 25), getF2eWavePointY(-Math.abs(180 - f2eWaveAnglePI), 25));
        f2eWaveAnglePI += 1;
        f2eWaveR = windowHeight * Math.sin(f2eWaveAnglePI * _PIA);
        f2eWaveAngle += 2;
        textSize(25);
        fill(_f2eC);
        textFont('Jura');
        text("F2E", -20, 9);
    }

    if (showF2ePicture === 1 && showFe2PictureSize > 5) {
        image(memberImage, -showFe2PictureSize / 2, -showFe2PictureSize * 0.55 / 2, showFe2PictureSize, showFe2PictureSize * 0.55);
    }
    if (showF2ePicture === 3 && showFe2PictureSize > 5) {
        image(activityImage, -showFe2PictureSize / 2, -showFe2PictureSize * 0.55 / 2, showFe2PictureSize, showFe2PictureSize * 0.55);
    }
    if (showF2ePicture === 5 && showFe2PictureSize > 5) {
        image(erpv2Image, -showFe2PictureSize / 2, -showFe2PictureSize * 0.55 / 2, showFe2PictureSize, showFe2PictureSize * 0.55);
    }

    if (showF2ePicture % 2 != 0) {
        if (showFe2PictureSize < windowWidth / 1.5) {
            showFe2PictureSize += 15;
        } else {
            lock = true;
        }
    }

}

function scene4() {
    if (s4.length > 5) s4 = [];

    if (!lock) {
        s4.push({
            x: windowWidth * Math.random(),
            y: windowHeight * Math.random()
        });
        for (var i = 1; i < s4.length; i++) {
            background('rgba(30,30,30,0.1)');
            var r = 20 * Math.random();
            stroke(50 * Math.random() + 20);
            //line(s4[i].x, s4[i].y, s4[i - 1].x, s4[i - 1].y);
            if (i % 2 === 0) {
                fill(_arcC);
                triangle(s4[i].x, -s4[i].y, s4[i].x - r / 3, s4[i].y - r / 3, s4[i].x + r / 3, s4[i].y - r / 3);
            } else {
                fill(_f2eC);
                triangle(s4[i].x, -s4[i].y, s4[i].x - r / 3, s4[i].y - r / 3, s4[i].x + r / 3, s4[i].y - r / 3);
            }
        }
    }

    translate(windowWidth / 2, windowHeight / 2);
    if (showOrderPicture === 1 && showOrderPictureSize > 5) {
        image(orderImage, -showOrderPictureSize / 2, -showOrderPictureSize * 0.55 / 2, showOrderPictureSize, showOrderPictureSize * 0.55);
    }
    if (showOrderPicture % 2 != 0) {
        if (showOrderPictureSize < windowWidth / 1.5) {
            showOrderPictureSize += 15;
        } else {
            lock = true;
        }
    }
    //if(showFe2PictureSize > 5){
    //    image(orderImage, -showFe2PictureSize / 2, -showFe2PictureSize * 0.55 / 2, showFe2PictureSize, showFe2PictureSize * 0.55);
    //}
    //if (showFe2PictureSize < windowWidth / 1.5) {
    //    showFe2PictureSize += 10;
    //}
}


function getF2eWavePointX(angle, r) {
    return (r) * Math.cos(angle * _PIA);
}

function getF2eWavePointY(angle, r) {
    return (r) * Math.sin(angle * _PIA);
}

function mouseClicked() {
    if (mouseY < windowHeight / 3) { //pre
        changePage(-1);
    } else { //next
        changePage(1)
    }
}

function keyPressed() {
    backStep = 0;
    if (keyCode == DOWN_ARROW) {
        showImage();
    }
    return false; // prevent default
}

function changePage(delta) {
    showF2ePicture = 0;
    showArcPicture = 0;
    showOrderPicture = 0;
    showArcPictureSize = 0;
    showFe2PictureSize = 0;
    showOrderPictureSize = 0;
    s4 = [];
    backStep = 10;
    lock = false;
    if (frame === 1 && delta === -1) return;
    if (frame === 5 && delta === 1) return;
    frame = frame + delta;
}

function showImage() {
    backStep += 1;
    if (backStep < 100) {
        background(30, backStep);
    } else {
        background(30, 40);
    }
    if (frame === 2) {
        if (showArcPicture < 4) {
            showArcPicture += 1;
            showArcPictureSize = 0;
        } else {
            showArcPicture = 1;
            showArcPictureSize = 0;
        }
        lock = false;
    }
    if (frame === 3) {
        if (showF2ePicture < 6) {
            showF2ePicture += 1;
            showFe2PictureSize = 0;
        } else {
            showF2ePicture = 1;
            showFe2PictureSize = 0;
        }
        lock = false;
    }
    if (frame === 4) {
        if (showOrderPicture < 2) {
            showOrderPicture += 1;
            showOrderPictureSize = 0;
        } else {
            showOrderPicture = 1;
            showOrderPictureSize = 0;
        }
        lock = false;
    }
}

function initLink() {
    ball[0].x = windowWidth / 1.5 * Math.random();
    ball[0].y = windowHeight / 5 * Math.random();
    ball[0].r = 5 * Math.random() + 5;
    ball[1].x = windowWidth / 5 * Math.random();
    ball[1].y = windowHeight / 1.5 * Math.random();
    ball[1].r = 5 * Math.random() + 5;
    ball[2].x = windowWidth / 2 * Math.random();
    ball[2].y = windowHeight / 3 * Math.random();
    ball[2].r = 5 * Math.random() + 5;
}

function drawLink() {
    line(ball[0].x, ball[0].y, ball[1].x, ball[1].y);
    line(ball[1].x, ball[1].y, ball[2].x, ball[2].y);
    line(ball[2].x, ball[2].y, ball[0].x, ball[0].y);

    line(ball[0].x, ball[0].y, windowWidth / 2 + _size / 2, windowHeight / 2);
    line(ball[1].x, ball[1].y, windowWidth / 2, windowHeight / 2 + _size);
    line(ball[2].x, ball[2].y, windowWidth / 2 + _size, windowHeight / 2 + _size);

    ellipse(ball[0].x, ball[0].y, ball[0].r, ball[0].r);
    ellipse(ball[1].x, ball[1].y, ball[1].r, ball[1].r);
    ellipse(ball[2].x, ball[2].y, ball[2].r, ball[2].r);
    ball[0].x = ball[0].x + Math.sin(Math.random() * 360 * _PIA) * 2;
    ball[1].x = ball[1].x + Math.sin(Math.random() * 360 * _PIA) * 2;
    ball[2].x = ball[2].x + Math.sin(Math.random() * 360 * _PIA) * 2;
    ball[0].y = ball[0].y + Math.sin(Math.random() * 360 * _PIA) * 2;
    ball[1].y = ball[1].y + Math.sin(Math.random() * 360 * _PIA) * 2;
    ball[2].y = ball[2].y + Math.sin(Math.random() * 360 * _PIA) * 2;
}

function initArc() {
    arc.a = new Graphic(_size, _size);
    arc.a.setStroke(_arcC);
    arc.a.drawA();
    arc.triangle = new Graphic(_size, _size);
    arc.triangle.setFill(_arcC);
    arc.triangle.drawTriangle();
    arc.r = new Graphic(_size, _size);
    arc.r.setStroke(_arcC);
    arc.r.drawR();
    arc.c = new Graphic(_size, _size);
    arc.c.setStroke(_arcC);
    arc.c.drawC();
}

function drawArc() {
    arc.triangle.drawTriangle();
    image(arc.triangle.getGraphic(), 0, 0);
    image(arc.a.getGraphic(), 0, 0);
    image(arc.r.getGraphic(), _size + 10, 0);
    image(arc.c.getGraphic(), _size * 2 + 20, 0);
}

function initF2e() {
    f2e.f = new Graphic(_size, _size);
    f2e.f.setStroke(_f2eC);
    f2e.f.drawF();
    f2e._2 = new Graphic(_size, _size);
    f2e._2.setStroke(_f2eC);
    f2e._2.draw2();
    f2e.e = new Graphic(_size, _size);
    f2e.e.setStroke(_f2eC);
    f2e.e.drawE();
    f2e.runningBall = new RunningBall(_size * 2 + 15, _size);
}

function drawF2e() {
    f2e.runningBall.run();
    image(f2e.runningBall.getGraphic(), 0, _size + 20);
    image(f2e.f.getGraphic(), 0, _size + 20);
    image(f2e._2.getGraphic(), _size + 10, _size + 20);
    image(f2e.e.getGraphic(), _size * 2 + 20, _size + 20);
}



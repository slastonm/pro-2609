window.onload = function(){
    let btn = document.querySelector('button');

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('style', 
    'border: 2px solid black');
    svg.setAttribute('width', 400);
    svg.setAttribute('height', 400);
    document.body.appendChild(svg);

    // <svg style="width: 400px; height: 200px;">
    // <line x1="100" y1="0" x2="200" y2="200" stroke="black" stroke-widht="4"></line>
    // <line x1="100" y1="0" x2="100" y2="100" stroke="black" stroke-widht="4"></line>
    // </svg>

    function drawSvgLine(width, height){
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('style', 
        'border: 2px solid black');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '100');
        line.setAttribute('y1', '0');
        line.setAttribute('x2', '200');
        line.setAttribute('y2', '200');
        line.setAttribute('stroke', 'black');
        line.setAttribute('stroke-width', '4');
        svg.appendChild(line);
        document.body.appendChild(svg);
    }
    btn.onclick = function(){
        drawSvgLine(400, 200);
    }
}
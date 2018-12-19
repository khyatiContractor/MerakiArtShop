

var data = [4, 12, 15, 16, 23, 42];

var height = 300;
var barWidth = 20;
var width = barWidth * data.length;


var y = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([height, 0]);

var chart = d3
  .select("#chart01")
  .append("svg")
  .attr("class", "chart")
  .attr("width", width)
  .attr("height", height);

var bar = chart
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", function(d, i) {
    return "translate(" + i * barWidth + "," + y(d) + ")";
  })
  .on("mousemove", function(d, i) {
    var that = this;
      hoverGroup.attr("transform", function() {
      console.log(
        "translate(" +
          (i * barWidth + d3.mouse(that)[0]) +
          "," +
          (y(d) + d3.mouse(that)[1]) +
          ")"
      );
      return (
        "translate(" +
        (i * barWidth + d3.mouse(that)[0]) +
        "," +
        (y(d) + d3.mouse(that)[1] - 20) +
        ")"
      );
    });
  })
  .on("mouseout", function(d, i) {
    hoverGroup.style("visibility", "hidden");
  })
  .on("mouseover", function(d, i) {
    hoverText.text(d);
    hoverGroup.style("visibility", "visible");
  });

var hoverGroup = chart.append("g").style("visibility", "hidden");

hoverGroup
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 20)
  .attr("height", 20)
  .attr("fill", "rgb(100,100,100)");

var hoverText = hoverGroup
  .append("text")
  .attr("x", 14)
  .attr("y", 15);

bar
  .append("rect")
  .attr("fill", "blue")
  .attr("height", function(d) {
    return height - y(d);
  })
  .attr("width", barWidth - 1);

bar
  .append("text")
  .style("fill", "white")
  .attr("x", 10)
  .attr("y", 10)
  .attr("dx", ".5em")
  .text(function(d) {
    return d;
  });

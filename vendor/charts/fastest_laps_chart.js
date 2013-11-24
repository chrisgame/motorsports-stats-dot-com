var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
  .range([0, width]);

var y = d3.scale.linear()
  .range([0, height]);

  var color = d3.scale.category10();



  var svg = d3.select("body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("data/f1/fastest_laps.csv", function(error, data) {
    color.domain(d3.keys(data[0]).filter(function(key) { return key !== "track"; }));

    var years = color.domain().map(function(name) {
      return {
        name: name,
        values: data.map(function(d) {
          return {track: d.track, lapTime: moment.duration('0:'+d[name]).asMilliseconds()};
        })
      };
    });

    function formatLapTime(milliseconds) {
      var lapTime = moment.duration(milliseconds)
    return lapTime.minutes()+':'+lapTime.seconds()+'.'+lapTime.milliseconds()
    };

    var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(function(d) { return data[d].track; })
    .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .tickFormat(function(d) { return formatLapTime(d); })
      .orient("left");

    var line = d3.svg.line()
      .interpolate("basis")
      .x(function(d,i) { return x(i); })
      .y(function(d) { return y(d.lapTime); });

    x.domain([0, data.length -1]);

    y.domain([
        d3.min(years, function(c) { return d3.min(c.values, function(v) { return v.lapTime; }); }),
        d3.max(years, function(c) { return d3.max(c.values, function(v) { return v.lapTime; }); })
        ]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Lap Time (minutes)");

    var year = svg.selectAll(".year")
      .data(years)
      .enter().append("g")
      .attr("class", "year");

    year.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d) { return color(d.name); });

    year.append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(data.length-1) + "," + y(d.value.lapTime) + ")"; })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });
  });


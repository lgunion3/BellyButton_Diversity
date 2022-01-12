function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
    PANEL.append("h6").text(result.sample);
    PANEL.append("h6").text(result.ethnicity);
    PANEL.append("h6").text(result.gender);
    PANEL.append("h6").text(result.age);
    PANEL.append("h6").text(result.bbtype);
    PANEL.append("h6").text(result.wfreq);
    
  });
}

function buildCharts(sample){
  d3.json("samples.json").then((data) => {
    samples = data.samples;
    sampleArray = samples.filter(sampleObject => sampleObject.id = sample);
    indexArray = sampleArray[0];
      console.log(indexArray);
  });  
}

function init() {
    var selector = d3.select("#selDataset");
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });

      buildCharts(sampleNames[0]);
      buildMetadata(sampleNames[0]);
    });
}
    

function optionChanged(newSample) {
  buildCharts(newSample);
  buildMetadata(newSample);
}


init();

var funnel = (function ($) {

  // funnel object
  var funnel = {};

  funnel.node = $('#funnelwrapper');
  funnel.frameNo = -1;
  funnel.templates = {};
  funnel.templateOrder = ['details', 'brew', 'address', 'confirmation'];
  funnel.output = {};

  funnel.init = function () {
    this.getTemplates();
    this.addFrame(++this.frameNo);
  };

  funnel.getTemplates = function () {
    var templates = $('.template');
    [].slice.call(templates).forEach(function  (el) {
      var id = el.dataset.id;
      this.templates[id] = el.children[0];
    }, this);
  };

  funnel.updateOutput = function (no) {

  };

  funnel.addFrame = function (no) {
    var html = this.templates[this.templateOrder[no]];
    funnel.node.append(html);
    var frames = $('div.frame');
    if (this.frameNo > 0) this.updateOutput(frames[no]);
    frames.get(no).scrollIntoView({
      behavior: 'smooth',
      block:    'start'
    });
  }

  funnel.previousFrame = function (no) {
    var frames = $('.frame');
    frames.get(no).scrollIntoView({
      behavior: 'smooth',
      block:    'start'
    }); 
  }

  funnel.node.on('click', '.next', function (e) {
    funnel.addFrame(++funnel.frameNo);
  });

  funnel.node.on('click', '.previous', function (e) {
    funnel.previousFrame(--funnel.frameNo);
  });

  funnel.node.on('click', 'img.icon', function () {

  });

  return funnel.init();

}(jQuery));
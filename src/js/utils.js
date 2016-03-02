var utils = (function() {

  return {

        /**
     * Simple function to provide replace all functionality that works
     * with variables.
     * @param  {String} find    String to find.
     * @param  {String} replace String that replaces the find string.
     * @param  {String} str     The string on which to operate.
     * @return {String}         Processed string.
     */
    replaceAll: function (find, replace, str) {
      return str.replace(new RegExp(find, 'g'), replace);
    },

    /**
     * Applies a template to a data object to produce HTML. The template can be
     * either a a flat HTML structure, or a JS array.
     * @param  {Array}  template  HTML Template.
     * @param  {Object} obj       Data object.
     * @return {String}           HTML.
     */
    applyTemplate: function (template, obj) {
      var p, prop, param, html;
      html = this.toType(template) === 'array' ? template.join('') : template;
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          prop = obj[p];
          param = '#{param}'.replace('param', p);
          html = this.replaceAll(param, prop, html);
        }
      }
      return html;
    }

  }

  }());
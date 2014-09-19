/** @module snippetStyle */
window.snippetStyle = {
  /** Format all anyfetch-date classes in document
   * @param fromNow {boolean} Defines if the dates should be shown relative to now, defaults to false
   * @param format {String} A moment format string, defaults to llll
   * @param locale {String} Sets the locale, defaults to en
   */
  formatDates: function formatDates(fromNow, format, locale) {
    moment.locale(locale || 'en');
    var dateNodes = document.getElementsByClassName('anyfetch-date');
    for(var i = 0; i < dateNodes.length; i += 1) {
      var node = dateNodes[i];
      var iso8601 = node.getAttribute("data-iso8601");
      if(!iso8601) {
        iso8601 = node.textContent;
        node.setAttribute("data-iso8601", iso8601);
      }
      var mDate = moment(iso8601);
      var formatted;
      if(fromNow) {
        formatted = mDate.fromNow();
      } else {
        formatted = mDate.format(format || 'llll');
      }
      node.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }
  }
};


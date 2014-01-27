Template.page_settings.rendered = function () {
  $('.azimuth-admin-panel').find('select').selectize({ sortField: 'text' });
};
Template.page_settings.events = {
  'click .delete-page': function(e) {
    e.preventDefault();
    Azimuth.utils.openModal('#deletePageModal');
  },
  'click .delete-page-confirm': function(e) {
    var page = Azimuth.utils.getCurrentPage();
    Azimuth.utils.closeModal('#deletePageModal');
    if (Azimuth.collections.Pages.find().count() == 1) {
      noty({
        text: 'Sorry, you can\'t delete the only page.',
        type: 'error'
      });
      return false;
    }
    Router.go('/');
    Azimuth.collections.Pages.remove(page._id);
    noty({
      text: 'Page successfully deleted.',
      type: 'success'
    });
  }
};

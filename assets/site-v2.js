/**
 * initialize tabs
 */
function setupTabs() {
    var tabs = $('.tabs > li');
    var tabsContent = $('.tabs-content > li');

    window.tabs = tabs;
    window.tabsContent = tabsContent;

    tabs.first().addClass('active');
    tabsContent.first().addClass('active');
}

/**
 * handle tab switch
 * @param event event object
 */
function switchTabs(event) {
    var tab = $(event.currentTarget);
    var position = tab.index();

    tabs.removeClass('active');
    tabsContent.removeClass('active');

    tab.addClass('active');
    tabsContent.eq(position).addClass('active');
}

jQuery(function() {
    setupTabs();
    $('.tabs li').off('click.tabs').on('click.tabs', function(event) {
        console.log(event);
        switchTabs(event);
    });
});
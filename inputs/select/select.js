sEditable.addType({
    type: 'select',
    template: Template.s_editable_form_select,
    getVal: function ($inputWrapper) {
        return $inputWrapper.find('select').val();
    }
});

Template.s_editable_form_select.helpers({
    'selectedVal': function (v) {
        return this.value === v;
    }
});

Template.s_editable_form_select.events({
    'change select': function (e) {
        if (!this.showbuttons) {
            $(e.target).closest('form').submit();
        }
    }
});

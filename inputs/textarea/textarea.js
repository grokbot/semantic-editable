sEditable.addType({
    type: 'textarea',
    classes: ['editable-pre-wrapped'],
    template: Template.s_editable_form_textarea,
    getVal: function ($inputWrapper) {
        return $inputWrapper.find('textarea').val();
    }
});

Template.s_editable_form_textarea.events({
    'keydown textarea': function (e) {
        if (e.ctrlKey && e.which === 13) {
            $(e.target).closest('form').submit();
        }
    }
});
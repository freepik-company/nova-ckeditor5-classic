Nova.booting((Vue) => {
    Vue.component('index-ckeditor5-classic-field', require('./components/IndexField').default)
    Vue.component('detail-ckeditor5-classic-field', require('./components/DetailField').default)
    Vue.component('form-ckeditor5-classic-field', require('./components/FormField').default)
})

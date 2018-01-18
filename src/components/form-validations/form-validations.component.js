import formModel from './form-data.model'
import formSchema from './form-data.schema'

export default {

  name: 'form-validations',
  data() {
    return {
      formModel: formModel,
      formSchema: formSchema,
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        fieldIdPrefix: 'user-'
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
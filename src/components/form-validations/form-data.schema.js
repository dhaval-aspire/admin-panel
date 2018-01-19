import VueFormGenerator from 'vue-form-generator'

export default {
  groups: [
    {
      legend: 'Dynamic form generation',
      fields: [
        {
          type: 'input',
          inputType: 'email',
          label: 'Email Address',
          model: 'email',
          placeholder: 'Enter email',
          readonly: false,
          required: true,
          disabled: false,
          validator: VueFormGenerator.validators.email
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Your Name',
          model: 'name',
          placeholder: 'Enter name',
          readonly: false,
          required: false,
          disabled: this.email && this.email.length,
          min: 3,
          validator: VueFormGenerator.validators.string
        }
      ]
    },
    {
      legend: 'Likes',
      fields: [
        {
          type: 'select',
          selectOptions: {
            noneSelectedText: 'Select One',
            selected: true
          },
          label: 'Select One',
          model: 'food',
          values: ['Carrots', 'Beans', 'Tomatoes', 'Corn'],
          required: true,
          validator: VueFormGenerator.validators.required
        },
        {
          type: 'checklist',
          label: 'plans',
          listBox: false,
          values: [
            'Check me out',
            'Check that out'
          ],
          model: 'plan',
          class: 'checkbox-inline'
        },
        {
          type: 'submit',
          buttontext: 'Submit',
          validateBeforeSubmit: true,
          onSubmit: function (model, schema) {
            console.log(model, schema)
          }
        }
      ]
    }
  ]
}

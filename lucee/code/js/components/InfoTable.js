export default {
  props:{
    TableName: {
      type: String,
      required: true
    },
    CFArgTableName: {
      type: String,
      required: true
    },
    CFArgTableCat: {
      type: String,
      required: true
    }
  },
  template: `
  <table class="table table-bordered">
    <tbody>
      <tr>
        <td class="tableHeading">{{ TableName }}</td>
      </tr>
      <tr v-for="row in rowInfo">
        <td>
          <a :href="row[1]">{{ row[0] }}</a>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  created() {
    fetch( './cfm/models/InfoTable.cfm?TableName=' + this.CFArgTableName + '&TableCategory=' + this.CFArgTableCat)
    .then( res => res.json() )
    .then (res => {
      this.rowInfo = res.DATA;
      console.log(res.DATA);
    })
  },
  data() {
    return {
      rowInfo: {}
    }
  }
};
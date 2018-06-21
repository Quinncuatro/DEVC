export default {
  props:{
    tablename: {
      type: String,
      required: true
    }
  },
  template: `
  <table class="table table-bordered">
    <tbody>
      <tr>
        <td class="tableHeading">{{ tablename }}</td>
      </tr>
      <tr>
        <td><p v-for="rowName in rowNames">{{ rowName }}</p></td>
      </tr>
    </tbody>
  </table>
  `,
  mounted() {
    fetch("/cfm/models/InfoTable.cfc?method=getRowNames")
    .then(function(response) {
      console.log(response)
      // return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
    // .then(console.log(response))
    //.then(response => response.json())
    //.then((data) => {
    //this.rowNames = data;
    //})
  },
  data() {
    return {
      rowNames: ['a', 'b', 'c']
    }
  }
};
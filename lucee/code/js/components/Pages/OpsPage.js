import InfoTable from '../InfoTable.js';

export default {
  components: {
    InfoTable
  },
  template: `
  <div class="row">
    <!--<div class="col-xs-12 col-sm-6 col-md-offset-1 col-md-4">-->
    <div class="col-xs-12 col-sm-6 col-md-offset-1 col-md-5">
      <info-table :TableName="tableName_A" :CFArgTableName="cfArgTableName_A" :CFArgTableCat="cfArgTableCat_A"></info-table>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-5">
      <info-table :TableName="tableName_B" :CFArgTableName="cfArgTableName_B" :CFArgTableCat="cfArgTableCat_B"></info-table>
    </div>
  </div>
  `,
  data() {
    return {
      tableName_A: 'Miscellaneous Links',
      cfArgTableName_A: 'Miscellaneous Links',
      cfArgTableCat_A: 'Home',
      tableName_B: 'Employee Recognition',
      cfArgTableName_B: 'Employee Recognition',
      cfArgTableCat_B: 'Home'
    }
  }
};
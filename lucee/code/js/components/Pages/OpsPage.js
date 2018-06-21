import InfoTable from '../InfoTable.js';

export default {
  components: {
    InfoTable
  },
  template: `
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-offset-1 col-md-4">
      <info-table :tablename="A"></info-table>
      <!--<info-table :tablename="A"></info-table>
      <info-table :tablename="A"></info-table>
      <info-table :tablename="A"></info-table>
      <info-table :tablename="A"></info-table>-->
    </div>
    <div class="col-xs-12 col-sm-6 col-md-offset-2 col-md-4">
      <!--<info-table :tablename="A"></info-table>
      <info-table :tablename="A"></info-table>
      <info-table :tablename="A"></info-table>
      <info-table :tablename="A"></info-table>
      <info-table :tablename="A"></info-table>-->
    </div>
  </div>
  `,
  data() {
    return {
      A: 'Stuff And Things',
      B: 'Whatever Forever'
    }
  }
};
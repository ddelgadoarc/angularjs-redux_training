import * as CounterActions from '../../actions/counter';

class HomeController {

  constructor($ngRedux, $scope) {

      "ngInject";

      this.$scope = $scope;
      this.$ngRedux = $ngRedux;
      this.name = 'home Page';

      let unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
      $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
        value: state.counter
    };
  }

}

export default HomeController;

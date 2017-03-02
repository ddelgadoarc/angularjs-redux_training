import * as Actions from '../../actions';

class TodosController {

    constructor($ngRedux, $scope) {

        "ngInject";

        this.redux = {};
        this.$ngRedux = $ngRedux;
        this.name = 'Todos';
        this.$scope = $scope;

        let unsubscribe = $ngRedux.connect(this.mapStateToThis, Actions)(this.redux);
        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis(state) {
        return {
            value: state.counter
        };
    }

    addTodo() {
        console.log("Here");
    }

    getTodos() {

        let state = this.$ngRedux.getState();

        console.log(state);

        return state.todos;
    }

}

export default TodosController;
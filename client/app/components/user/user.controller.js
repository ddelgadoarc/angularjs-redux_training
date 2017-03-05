import * as Actions from '../../redux/actions';

class UserController {

    constructor($ngRedux, $scope) {

        "ngInject";

        this.$scope = $scope;
        this.$ngRedux = $ngRedux;
        this.name = 'Users Page';
        this.redux = {};
        this.addUser = this.addUser;

        let unsubscribe = $ngRedux.connect(this.mapStateToThis, Actions)(this.redux);
        $scope.$on('$destroy', unsubscribe);


        console.log(this);

    }

    mapStateToThis(state) {
        return {
            value: state.counter
        };
    }

    addUser(user = []) {

        this.redux.addUserAction(user);
    }

}

export default UserController;
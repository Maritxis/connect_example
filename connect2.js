const fakeComponent = (props) => console.log(props);

const mapStateToProps = (state) => ({
 prop1: state.a,
 prop2: state.b,
 prop3: state.c,
});

const state = {
 a: 'Hola',
 b: 'buenas',
 c: '¿Cómo te va la vida?',
}

const connect = (mapFunc) => (component) => component(mapFunc(state));

const connectedComponent = connect(mapStateToProps)(fakeComponent);



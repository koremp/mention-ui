export default function UserList({ $target, initialState }) {
  this.state = initialState;
  this.$element = document.createElement('ul');

  $target.appendChild(this.$element);

  this.render = () => {
    const htmlString = ''; // this.state

    this.$element.innerHTML = htmlString;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
}

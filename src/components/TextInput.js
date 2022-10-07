export default function TextInput({
  $target, initialState, onSearch, onAddUser, onClear,
}) {
  this.$element = document.createElement('input');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$element.value = this.state.input;
    this.$element.focus();
  };

  this.$element.addEventListener('Enter', (e) => {
    if (this.state.userList.length > 0) {
      try {
        onAddUser(this.state.userList.find((u) => u.username === this.state.input));
      } catch (e) {
        throw new Error('wrong on onAddUser in TextInput');
      }
    }

    onClear();
  });

  this.$element.addEventListener('keyup', (e) => {
    const keyword = e.target.value.trim();
    if (keyword !== ''
      && (keyword.includes('@') || keyword.includes('#'))) {
      onSearch(keyword);
    }
  });

  this.render();
}

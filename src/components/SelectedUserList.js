export default function SelectedUserList({ $target, initialState }) {
  this.state = initialState;
  this.$element = document.createElement('ul');

  $target.appendChild(this.$element);

  this.render = () => {
    const htmlString = this.state.map((item) => {
      if (item.displayName) {
        return `${item.displayName} (${item.username})`;
      }

      if (item.personalInfo) {
        if (item.personalInfo.firstName && item.personalInfo.lastName) {
          return `${item.personalInfo.firstName}, ${item.personalInfo.lastName} (${item.username})`;
        }

        if (item.personalInfo.firstName) {
          return `${item.personalInfo.firstName} (${item.username})`;
        }

        if (item.personalInfo.lastName) {
          return `${item.personalInfo.lastName} (${item.username})`;
        }
      }

      return `<b>@${item.username}</b>`;
    });

    this.$element.innerHTML = htmlString;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
}

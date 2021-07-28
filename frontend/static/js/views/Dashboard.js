import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
        <h1>Welcome Back!</h1>
        <p>
            This is a paragraph about something, nothing yet.
        </p>
        <p>
            <a href="/posts" data-link>View Recent Posts</a>
        </p>
      `;
  }
}

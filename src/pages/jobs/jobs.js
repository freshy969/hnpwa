import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../helpers/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';

export class Jobs extends PageViewElement {
    _render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>Jobs</h2>
      </section>
    `;
    }
}

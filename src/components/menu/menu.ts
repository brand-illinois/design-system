import { html } from 'lit';
import '@illinois-toolkit/ilw-header-menu';



export interface MenuProps {
  // itemSlotName1?: string;
  // itemSlotLink1?: string;
  // itemSlotName2?: string;
  // itemSlotLink2?: string;
  // itemSlotName3?: string;
  // itemSlotLink3?: string;
}

export const Menu = ({

}: MenuProps) => html`
<ilw-header-menu slot="navigation">
    <ul>
        <li><ilw-header-menu-section>
            <span slot="label">Start Here</span>
            <ul>
            <li><a href="/getting_started/index.html">Getting Started</a></li>
            <li><a href="/create_page/index.html">Create a Page</a></li>
            <li><a href="/upgrade/index.html">Upgrade from V2</a></li>
            </ul>
        </ilw-header-menu-section></li>
        <li><ilw-header-menu-section linked="true">
            <a slot="link" href="/philosophy/index.html">Information</a>
            <ul>
              <li><a href="/philosophy/index.html">Philosophy</a></li>
              <li><a href="/links/index.html">Helpful Links</a></li>
              <li><a href="/github/index.html">Organization and Github</a></li>
              <li> <ilw-header-menu-section>
                <span slot="label">Smithsonite</span>
                <ul>
                  <li><a href="#">Amphibole</a></li>
                  <li><a href="#">Pyroxene</a></li>
                  <li><a href="#">Feldspar</a></li>
                </ul>
              </ilw-header-menu-section></li>
              <li><ilw-header-menu-section linked="true">
                <a slot="link" href="#">Garnet</a>
                <ul>
                  <li><a href="#">Gneiss</a></li>
                  <li><a href="#">Peridotite</a></li>
                  <li><a href="#">Syenite</a></li>
                  <li><a href="#">Porphyry</a></li>
                </ul>
              </ilw-header-menu-section></li>
            </ul>
        </ilw-header-menu-section></li>
        <li><ilw-header-menu-section>
          <span slot="label">Testing Slots</span>
          <ul>
            <li> <ilw-header-menu-section>
              <span slot="label">Smithsonite</span>
              <ul>
                <li><a href="#">Amphibole</a></li>
                <li><a href="#">Pyroxene</a></li>
                <li><a href="#">Feldspar</a></li>
              </ul>
            </ilw-header-menu-section></li>
            <li> <ilw-header-menu-section>
              <span slot="label">Smithsonite</span>
              <ul>
                <li><a href="#">Amphibole</a></li>
                <li><a href="#">Pyroxene</a></li>
                <li><a href="#">Feldspar</a></li>
              </ul>
            </ilw-header-menu-section></li>
            <li> <ilw-header-menu-section>
              <span slot="label">Smithsonite</span>
              <ul>
                <li><a href="#">Amphibole</a></li>
                <li><a href="#">Pyroxene</a></li>
                <li><a href="#">Feldspar</a></li>
              </ul>
            </ilw-header-menu-section></li>
            <li> <ilw-header-menu-section>
              <span slot="label">Smithsonite</span>
              <ul>
                <li><a href="#">Amphibole</a></li>
                <li><a href="#">Pyroxene</a></li>
                <li><a href="#">Feldspar</a></li>
              </ul>
            </ilw-header-menu-section></li>
            <li> <ilw-header-menu-section>
              <span slot="label">Smithsonite</span>
              <ul>
                <li><a href="#">Amphibole</a></li>
                <li><a href="#">Pyroxene</a></li>
                <li><a href="#">Feldspar</a></li>
              </ul>
            </ilw-header-menu-section></li>
            <li> <ilw-header-menu-section>
              <span slot="label">Smithsonite</span>
              <ul>
                <li><a href="#">Amphibole</a></li>
                <li><a href="#">Pyroxene</a></li>
                <li><a href="#">Feldspar</a></li>
              </ul>
            </ilw-header-menu-section></li>
          </ul>
      </ilw-header-menu-section></li>
      <li><a href="/demo/index.html" id="current3">Demo Pages</a></li>
        <li><a href="/components_toc/index.html">Components</a></li>
        <li><a href="/preview/index.html">Component Preview</a></li>
        <li><ilw-header-menu-section right>
            <span slot="label">Six</span>
            <ul>
              <li><a href="/philosophy/index.html">Philosophy</a></li>
              <li><a href="/links/index.html">Helpful Links</a></li>
              <li><a href="/github/index.html">Organization and Github</a></li>
            </ul>
        </ilw-header-menu-section></li>
    </ul>
</ilw-header-menu>
`;
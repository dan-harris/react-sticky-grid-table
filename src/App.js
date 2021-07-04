import "./styles.css";
import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";

export default function App() {
  return (
    <div className="app-wrapper">
      <div className="outer-wrapper">
        <br />
        <span>🧙‍♀️ Heyyyoooo sticky tables doin their thingy.</span>
        <br />
        <br />
        <div className="autosizer-wrapper">
          <AutoSizer>
            {({ height, width }) => (
              <div
                className="wrapper"
                style={{ height: `${height}px`, width: `${width}px` }}
              >
                <div>
                  <table>
                    <thead>
                      <tr data-sticky>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>Country</th>
                        <th>University</th>
                        <th className="pin-right">IBAN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>000001</td>
                        <td>Lani</td>
                        <td>Ovendale</td>
                        <td>lovendale0@w3.org</td>
                        <td>7850 Old Shore Drive</td>
                        <td>United Kingdom</td>
                        <td>University of Plymouth</td>
                        <td className="pin-right">
                          BG34 MPVP 8782 88EX H1CJ SC
                        </td>
                      </tr>
                      <tr>
                        <td>000002</td>
                        <td>Israel</td>
                        <td>Tassell</td>
                        <td>itassell1@ow.ly</td>
                        <td>245 Merchant Circle</td>
                        <td>Macedonia</td>
                        <td>South East European University</td>
                        <td className="pin-right">
                          FR11 4824 2942 41H9 XBHC 46P2 O86
                        </td>
                      </tr>
                      <tr>
                        <td>000003</td>
                        <td>Eveleen</td>
                        <td>Mercer</td>
                        <td>emercer2@ow.ly</td>
                        <td>70700 Kipling Pass</td>
                        <td>Portugal</td>
                        <td>Instituto Superior Novas Profissões - INP</td>
                        <td className="pin-right">
                          GR96 7559 456P GUAN WTAJ 3VPB S0P
                        </td>
                      </tr>
                      <tr>
                        <td>000004</td>
                        <td>Conn</td>
                        <td>Whitley</td>
                        <td>cwhitley3@wsj.com</td>
                        <td>03 Service Terrace</td>
                        <td>Albania</td>
                        <td>Epoka University</td>
                        <td className="pin-right">
                          LI59 1813 2T7T VKTO 6RKE X
                        </td>
                      </tr>
                      <tr>
                        <td>000005</td>
                        <td>Cherye</td>
                        <td>Smitheram</td>
                        <td>csmitheram4@rambler.ru</td>
                        <td>9 Eliot Parkway</td>
                        <td>Indonesia</td>
                        <td>Universitas Mahasaraswati Denpasar</td>
                        <td className="pin-right">
                          BR27 4570 4226 4255 5239 0197 316T J
                        </td>
                      </tr>
                      <tr>
                        <td>000006</td>
                        <td>Bunnie</td>
                        <td>Sked</td>
                        <td>bsked5@51.la</td>
                        <td>03418 Ludington Plaza</td>
                        <td>Nigeria</td>
                        <td>Federal University of Technology, Minna</td>
                        <td className="pin-right">
                          ES45 6721 1332 3288 6455 1242
                        </td>
                      </tr>
                      <tr>
                        <td>000007</td>
                        <td>Helaine</td>
                        <td>Crother</td>
                        <td>hcrother6@opera.com</td>
                        <td>7932 Sloan Park</td>
                        <td>Philippines</td>
                        <td>Saint Ferdinand College</td>
                        <td className="pin-right">
                          GB50 HFAD 8121 3729 9841 31
                        </td>
                      </tr>
                      <tr>
                        <td>000008</td>
                        <td>Tana</td>
                        <td>Ajean</td>
                        <td>tajean7@sfgate.com</td>
                        <td>2 Schurz Junction</td>
                        <td>China</td>
                        <td>
                          Xi'an University of Electronic Science and Technology
                        </td>
                        <td className="pin-right">KZ85 7422 XDPB P2VQ H8SR</td>
                      </tr>
                      <tr>
                        <td>000009</td>
                        <td>Sollie</td>
                        <td>Greenrde</td>
                        <td>sgreenrde8@wikispaces.com</td>
                        <td>055 Mockingbird Way</td>
                        <td>Russia</td>
                        <td>
                          St. Petersburg State Mining Institute (Technical
                          University)
                        </td>
                        <td className="pin-right">
                          CH61 6423 9T4W WP0I 8MUK C
                        </td>
                      </tr>
                      <tr>
                        <td>000010</td>
                        <td>Vernon</td>
                        <td>Millington</td>
                        <td>vmillington9@marketwatch.com</td>
                        <td>74 David Pass</td>
                        <td>Portugal</td>
                        <td>Instituto Politécnico de Setúbal</td>
                        <td className="pin-right">
                          ES71 2390 0665 1601 8072 4924
                        </td>
                      </tr>
                      <tr>
                        <td>000011</td>
                        <td>Willard</td>
                        <td>Speares</td>
                        <td>wspearesa@hao123.com</td>
                        <td>4237 Moulton Park</td>
                        <td>China</td>
                        <td>Chongqing University of Science and Technology </td>
                        <td className="pin-right">BE21 5598 4355 8287</td>
                      </tr>
                      <tr>
                        <td>000012</td>
                        <td>Minette</td>
                        <td>Adderson</td>
                        <td>maddersonb@netlog.com</td>
                        <td>20 Westridge Crossing</td>
                        <td>Philippines</td>
                        <td>University of lloilo</td>
                        <td className="pin-right">SI71 6487 6088 3774 839</td>
                      </tr>
                      <tr>
                        <td>000013</td>
                        <td>Madonna</td>
                        <td>Richemont</td>
                        <td>mrichemontc@nasa.gov</td>
                        <td>46 Sherman Avenue</td>
                        <td>Pakistan</td>
                        <td>Punjab Institute of Computer science</td>
                        <td className="pin-right">FO47 9031 2293 0020 12</td>
                      </tr>
                      <tr>
                        <td>000014</td>
                        <td>Osbourne</td>
                        <td>Roscoe</td>
                        <td>oroscoed@noaa.gov</td>
                        <td>40 Sunnyside Lane</td>
                        <td>South Africa</td>
                        <td>University of South Africa</td>
                        <td className="pin-right">
                          FR23 5330 9279 24NB IC4T ZDH9 I74
                        </td>
                      </tr>
                      <tr>
                        <td>000015</td>
                        <td>Kath</td>
                        <td>Hancock</td>
                        <td>khancocke@earthlink.net</td>
                        <td>18570 Starling Pass</td>
                        <td>Indonesia</td>
                        <td>Politeknik Negeri Sambas</td>
                        <td className="pin-right">LU79 248V TPNJ ZQHZ 0S4Q</td>
                      </tr>
                      <tr>
                        <td>000016</td>
                        <td>Aleta</td>
                        <td>Doughartie</td>
                        <td>adoughartief@typepad.com</td>
                        <td>1440 Cherokee Place</td>
                        <td>China</td>
                        <td>Shenyang Pharmaceutical University</td>
                        <td className="pin-right">
                          GT19 CZJ0 WH8Y 4WI8 JPQJ AWNY TYF9
                        </td>
                      </tr>
                      <tr>
                        <td>000017</td>
                        <td>Mirilla</td>
                        <td>Worland</td>
                        <td>mworlandg@mashable.com</td>
                        <td>46597 Sunnyside Crossing</td>
                        <td>Sweden</td>
                        <td>Mälardalen University</td>
                        <td className="pin-right">
                          RS38 2407 6062 1886 8447 80
                        </td>
                      </tr>
                      <tr>
                        <td>000018</td>
                        <td>Jena</td>
                        <td>Creddon</td>
                        <td>jcreddonh@bbc.co.uk</td>
                        <td>611 Hanover Point</td>
                        <td>New Zealand</td>
                        <td>
                          Christchurch Polytechnic Institute of Technology
                        </td>
                        <td className="pin-right">
                          BH30 ZRXH ODUV MOSX OFZO C0
                        </td>
                      </tr>
                      <tr>
                        <td>000019</td>
                        <td>De witt</td>
                        <td>Hellcat</td>
                        <td>dhellcati@microsoft.com</td>
                        <td>3183 Cascade Drive</td>
                        <td>Indonesia</td>
                        <td>Institut Teknologi Bandung</td>
                        <td className="pin-right">BA49 4027 6071 7896 3508</td>
                      </tr>
                      <tr>
                        <td>000020</td>
                        <td>Cleon</td>
                        <td>Medgwick</td>
                        <td>cmedgwickj@livejournal.com</td>
                        <td>5712 Drewry Avenue</td>
                        <td>China</td>
                        <td>Shanghai University</td>
                        <td className="pin-right">
                          FR20 7714 6817 4685 SEL2 YP0U M08
                        </td>
                      </tr>
                      <tr>
                        <td>000021</td>
                        <td>Caressa</td>
                        <td>Aberchirder</td>
                        <td>caberchirderk@mit.edu</td>
                        <td>97 Fallview Junction</td>
                        <td>France</td>
                        <td>Université de Technologie de Compiègne</td>
                        <td className="pin-right">
                          FR70 3203 5174 02S6 6KGU YIJ7 866
                        </td>
                      </tr>
                      <tr>
                        <td>000022</td>
                        <td>Dona</td>
                        <td>Hindrich</td>
                        <td>dhindrichl@google.com</td>
                        <td>1 Judy Court</td>
                        <td>United States</td>
                        <td>St. John's College New Mexico</td>
                        <td className="pin-right">
                          TR88 6812 9R3F KLQV 7UGW 6KUC ZK
                        </td>
                      </tr>
                      <tr>
                        <td>000023</td>
                        <td>Eryn</td>
                        <td>Urrey</td>
                        <td>eurreym@apache.org</td>
                        <td>02 Delaware Place</td>
                        <td>Indonesia</td>
                        <td>Universitas Sumatera Utara</td>
                        <td className="pin-right">
                          RO39 QWVG UTYY DFHP GLXN 5AVB
                        </td>
                      </tr>
                      <tr>
                        <td>000024</td>
                        <td>Chelsea</td>
                        <td>Wildgoose</td>
                        <td>cwildgoosen@behance.net</td>
                        <td>087 Blue Bill Park Parkway</td>
                        <td>Philippines</td>
                        <td>Philippine Normal University</td>
                        <td className="pin-right">
                          FR13 5171 4360 67VL SKC2 7JV1 T98
                        </td>
                      </tr>
                      <tr>
                        <td>000025</td>
                        <td>Edd</td>
                        <td>Leffek</td>
                        <td>eleffeko@msn.com</td>
                        <td>39757 Forest Run Trail</td>
                        <td>China</td>
                        <td>Zhejiang Forestry University</td>
                        <td className="pin-right">
                          GT50 CAYK CCAK 8N5Y GATX GDC7 BLKX
                        </td>
                      </tr>
                      <tr>
                        <td>000026</td>
                        <td>Nicol</td>
                        <td>Le Barr</td>
                        <td>nlebarrp@cocolog-nifty.com</td>
                        <td>966 Manley Pass</td>
                        <td>Belarus</td>
                        <td>Belarussian State Academy of Music</td>
                        <td className="pin-right">
                          AE57 4203 4302 6701 7034 464
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </AutoSizer>
        </div>
      </div>
    </div>
  );
}

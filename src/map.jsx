import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useState,useEffect } from 'react';
import datakecamatan from './kecamatan.json'
import L from 'leaflet';

function LocationMarker({ trigger }) {
  const [position, setPosition] = useState(null);
  const map = useMap();
  
  useEffect(() => {
    if (!trigger) return;

    map.locate(
      {
        enableHighAccuracy: true
      }
    );
    const onLocationFound = (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 13);
    };

    map.once('locationfound', onLocationFound);

    // Cleanup in case map is unmounted or reused
    return () => {
      map.off('locationfound', onLocationFound);
    };
  }, [trigger, map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Lokasi kamu disini</Popup>
    </Marker>
  );
}


function Map ({triggerLocate, setSelectedLocation}) {
  const [clickedMarker, setClickedMarker] = useState(null);
    return(
        <div className="w-full h-full">
            <MapContainer center={[-6.2, 106.8]} zoom={11} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={datakecamatan} 
                  style={(feature) => {
                    const colors = [
                    '#f77c02', '#f7c602', '#ebf702', '#bef702', '#89f702', '#5cf702'
                    ];
                    const name = feature.properties.name;
                    const index = datakecamatan.features.findIndex(f => f.properties.name === name);
                    return {
                    color: "#000000",
                    weight: 1,
                    fillColor: colors[index % colors.length],
                    fillOpacity: 0.3,
                    };
                  }}
                  onEachFeature={(feature, layer) => {
                    const name = feature.properties.name;
                    const status = [
                      {keamanan :'sangat bahaya',
                       penyakit :'Demam Berdarah',
                       pencegahan : 'Tutup tempat penampungan air untuk cegah nyamuk', 
                      },
                      {keamanan :'bahaya',
                       penyakit :'Leptospirosis',
                       pencegahan : 'Hindari kontak dengan air banjir dan genangan kotor',
                      },
                      {keamanan :'waspada',
                       penyakit :'Kolera',
                       pencegahan : 'Minum air matang dan jaga kebersihan makanan',  
                      },
                      {keamanan :'cukup aman',
                       penyakit :'ISPA',
                       pencegahan : 'Gunakan masker di tempat umum', 
                      },
                      {keamanan :'aman',
                       penyakit :'Flu Musiman',
                       pencegahan : 'Istirahat cukup dan konsumsi vitamin', 
                      },
                      {keamanan :'sangat aman',
                       penyakit :'tidak ada',
                       pencegahan : 'Tetap jaga kebersihan dan pola hidup sehat', 
                      },
                    ]

                    const index = datakecamatan.features.findIndex(f => f.properties.name === name);
                    const statusIndex = index % status.length;
                    const data = status[statusIndex];

                    layer.on({
                      click: () => {
                        // Tambah marker di koordinat tengah fitur
                        const bounds = layer.getBounds();
                        const center = bounds.getCenter();

                        setClickedMarker({
                          position: center,
                          name,
                          ...data
                        });

                        setSelectedLocation({
                          name: `kecamatan ${name}, Jakarta`,
                          keamanan: data.keamanan,
                          penyakit: data.penyakit,
                          pencegahan: data.pencegahan
                        });
                        }
                      }
                    );
                  }} />
                  {clickedMarker && (
                    <Marker position={clickedMarker.position}>
                      <Popup>
                        <strong>{clickedMarker.name}</strong><br />
                        Keamanan: {clickedMarker.keamanan}<br />
                        Penyakit: {clickedMarker.penyakit}<br />
                        Pencegahan: {clickedMarker.pencegahan}
                      </Popup>
                    </Marker>
                  )}
                <LocationMarker trigger={triggerLocate}/>
            </MapContainer>
        </div>
    ) 
}

export default Map;
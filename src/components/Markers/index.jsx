import { Container } from './styles'

import { IngredientMarker } from '../IngredientMarker'

import { Error } from '../../utils/alerts'

export function Markers({
  markerTag: MarkerTag = IngredientMarker,
  markerName = 'marcador',
  markers,
  setMarkers,
  newMarker,
  setNewMarker,
  label,
  placeholder
}) {
  function handleAddMarker() {
    if (!newMarker) {
      return Error({
        title: `O campo está vazio, informe um ${markerName} para adicioná-lo`
      })
    }

    if (markers.includes(newMarker)) {
      setNewMarker('')
      return Error({ title: `Você já adicionou esse ${markerName}` })
    }

    setMarkers(prevState => [...new Set([...prevState, newMarker])])
    setNewMarker('')
  }

  function handleRemoveMarker(markerToBeDeleted) {
    setMarkers(prevState =>
      prevState.filter(marker => marker !== markerToBeDeleted)
    )
  }

  return (
    <Container>
      <label htmlFor="new_ingredient">{label}</label>
      <div>
        {markers.map(marker => (
          <MarkerTag
            key={marker}
            id={marker}
            value={marker}
            onClick={() => {
              handleRemoveMarker(marker)
            }}
          />
        ))}
        <MarkerTag
          isNew
          id="new_ingredient"
          value={newMarker}
          placeholder={placeholder}
          onChange={event => setNewMarker(event.target.value)}
          onClick={handleAddMarker}
        />
      </div>
    </Container>
  )
}

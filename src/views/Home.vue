<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br/>
    <h3> Petit tutorial vue </h3>
    <Video />
    <b-button variant="success" href="#inscription">Inscris-toi !</b-button>
    <Texte />
    <GmapMap ref="mapRef"
             :center="{lat:10, lng:10}"
             :zoom="12"
             map-type-id="terrain"
    >
      <h3>On a toujours d'un bon petit resto'</h3>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.geometry.location"
        :title="m.name"
        :clickable="true"
        :draggable="false"
        @click="openInfoWindowTemplate(m)"
      >
      </GmapMarker>
      <GmapInfoWindow
        :options="{maxWidth: 300}"
        :position="infoWindow.position"
        :opened="infoWindow.open"
        @closeclick="infoWindow.open=false">
        <!-- ici on utilise v-html et pas {{ }} car il est possible qu'on balance du html dans la div et qu'on souhaite l'interpreter -->
        <div v-html="infoWindow.template"></div>
      </GmapInfoWindow>
    </GmapMap>
  <br />
    <!--<div>
      <h3> Inscivez-vous pour ne pas en perdre une miette !</h3>
      <br/>
      <b-input-group>
        <b-form-input></b-form-input>
        <b-button variant="outline-success">M'inscrire</b-button>
      </b-input-group>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Video from '@/components/Video.vue'
import Texte from '@/components/Texte'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Video,
    Texte
  },
  data () {
    return {
      markers: [],
      infoWindow: {
        position: { lat: 0, lng: 0 },
        open: false,
        template: ''
      }
    }
  },
  methods: {
    searchNearBy () {
      this.$refs.mapRef.$mapPromise.then((map) => {
        /* eslint-disable no-undef */
        // let targetLatLng = new google.maps.LatLng(48.864716, 2.349014)
        map.panTo({ lat: 48.864716, lng: 2.349014 })
        // map.panTo({lat: 48.864716, lng: 2.349014})

        /* eslint-disable no-undef */
        const placesService = new google.maps.places.PlacesService(map)
        placesService.nearbySearch({
          location: { lat: 48.864716, lng: 2.349014 },
          radius: 10000,
          types: ['museum']
        }, (results, status) => {
          this.markers = results
          console.log(status)
        })
      })
    },
    openInfoWindowTemplate (item) {
      this.infoWindow.template = '<img alt="Vue logo" src="' + item.icon + '"><h1>' + item.name + '</h1>'
      this.infoWindow.position = item.geometry.location
      this.infoWindow.open = true
    }
  },
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
    this.searchNearBy()
  }
}
</script>
<style>
  b-button{
    margin-top: 5%;
  }
  .vue-map-container {
    display: block;
    margin: auto;
    width: 60vw;
    height: 60vh;
  }
  label{
    margin-right: 2%;
  }
  b-input-group{
    margin: 10%;
  }
</style>

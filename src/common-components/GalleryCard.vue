<template>
  <div :class="$style.cardContainer">
    <div :class="$style.card" v-for="(product, index) in products" :key="index">
      <div :class="$style.imageContainer">
        <img
          :class="$style.imageCard"
          src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        />
      </div>
      <div :class="$style.productTextContainer">
        <div :class="$style.productText">{{ product.name }}</div>
        <div :class="$style.description">{{ product.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryCard",
  data() {
    return {
      products: [
        {
          slides: [
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          ],
          name: "Interiors",
          description: "Description Text"
        },
        {
          slides: [
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          ],
          name: "Interiors",
          description: "Description Text"
        },
        {
          slides: [
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          ],
          name: "Interiors",
          description: "Description Text"
        },
        {
          slides: [
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          ],
          name: "Interiors",
          description: "Description Text"
        },
        {
          slides: [
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          ],
          name: "Interiors",
          description: "Description Text"
        },
        {
          slides: [
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          ],
          name: "Interiors",
          description: "Description Text"
        }
      ]
    };
  }
};
</script>
<style lang="scss" module>
.cardContainer {
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}
.card {
  flex: 0 0 30%;
  margin: 2rem 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 0.5rem;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
.imageContainer {
  max-width: 40rem;
}
.productTextContainer {
  padding: 1rem 2rem;
}
.productText {
  font-size: 3rem;
}
.description {
  font-size: 1.6rem;
}

.imageCard {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
</style>

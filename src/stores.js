import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor dui, lacinia nec ante in, dictum maximus ligula. Fusce nulla dui, blandit sed lorem eu."
    },
    {
        id: 2,
        rating: 9,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor dui, lacinia nec ante in, dictum maximus ligula. Fusce nulla dui, blandit sed lorem eu."
    },
    {
        id: 3,
        rating: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor dui, lacinia nec ante in, dictum maximus ligula. Fusce nulla dui, blandit sed lorem eu."
    }
])
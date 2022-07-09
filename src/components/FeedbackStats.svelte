<script>
    export let count
    export let average
    import {FeedbackStore} from "../stores";

</script>

<div class="feedback-stats">
    <h4>{$FeedbackStore.length} Reviews</h4>
    <h4>Rating Average: {Math.round(($FeedbackStore.reduce((a,{rating}) => a + rating, 0)/$FeedbackStore.length) * 100) / 100}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
</style>
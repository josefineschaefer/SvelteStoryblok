import { storyblokInit, apiPlugin } from "@storyblok/svelte";
import { useStoryblokApi } from "@storyblok/svelte";
import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Teaser from '../components/Teaser.svelte';

storyblokInit({
    accessToken: "MlrZhNAmddfQXuUWSryW8Att",
    use: [apiPlugin],
    components: {
        feature: Feature,
        grid: Grid,
        page: Page,
        teaser: Teaser,
    },
});

/** @type {import('./$types').PageLoad} */
export async function load() {

    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/home", {
        version: "draft",
    });
    return {
        story: data.story
    }
}

/**
 * @fileoverview
 * 所有有关 extSpotify 组件中用户可配置的状态都在这里
 * 如无特殊注明，此处所有配置均会被存储在 localStorage 中
 */

import { atomWithStorage } from "jotai/utils";

// ======================== extSpotify配置 ========================

/**
 * 是否启用Spotify功能 默认关闭
 */
export const extSpotifySwitchAtom = atomWithStorage(
	"extSpotifyswitchAtom",
	false,
);

/**
 * Spotify开发者平台上设置的Client ID
 */
export const extSpotifyClientIDAtom = atomWithStorage(
	"extSpotifyClientIDAtom",
	"ClientID",
);

/**
 * Spotify开发者平台上设置的Callback Url
 */
export const extSpotifyRedirectUrlAtom = atomWithStorage(
	"extSpotifyRedirectUrlAtom",
	"http://localhost:8888/callback",
);

/**
 * Spotify API所需的Access Token
 */
export const extSpotifyAccessTokenAtom = atomWithStorage(
	"extSpotifyAccessTokenAtom",
	"AccessToken",
);

/**
 * Spotify API轮询间隔 默认500(ms)
 */
export const extSpotifyIntervalAtom = atomWithStorage(
	"extSpotifyIntervalAtom",
	800,
);


/*
	fftDataAtom,
	hideLyricViewAtom,
	isLyricPageOpenedAtom,
	lowFreqVolumeAtom,
	musicAlbumNameAtom,
	musicArtistsAtom,
	musicCoverAtom,
	musicCoverIsVideoAtom,
	musicDurationAtom,
	musicLyricLinesAtom,
	musicNameAtom,
	musicPlayingAtom,
	musicPlayingPositionAtom,
	musicQualityTagAtom,
	musicVolumeAtom,
*/
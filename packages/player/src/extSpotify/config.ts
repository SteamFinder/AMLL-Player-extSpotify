/**
 * @fileoverview
 * 所有有关 extSpotify 组件中用户可配置的状态都在这里
 * 如无特殊注明，此处所有配置均会被存储在 localStorage 中
 */

import { atom } from "jotai";
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
 * Spotify的client id
 */
export const extSpotifyClientIDAtom = atomWithStorage(
	"extSpotifyClientIDAtom",
	"ClientID",
);

/**
 * Spotify的redirect url
 */
export const extSpotifyRedirectUrlAtom = atomWithStorage(
	"extSpotifyRedirectUrlAtom",
	"http://localhost:8888/callback",
);

/**
 * Spotify的access token
 */
export const extSpotifyAccessTokenAtom = atomWithStorage(
	"extSpotifyAccessTokenAtom",
	"AccessToken",
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
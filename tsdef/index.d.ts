import { ConnectOptions, CreateLocalTrackOptions, CreateLocalTracksOptions, LocalTrack } from './types';
import { LocalAudioTrack } from './LocalAudioTrack';
import { LocalVideoTrack } from './LocalVideoTrack';
import { Room } from './Room';

export const isSupported: boolean;
export const version:string;
export function connect(token: string, options?: ConnectOptions): Promise<Room>;
export function createLocalAudioTrack(options?: CreateLocalTrackOptions): Promise<LocalAudioTrack>;
export function createLocalTracks(options?: CreateLocalTracksOptions): Promise<LocalTrack[]>;
export function createLocalVideoTrack(options?: CreateLocalTrackOptions): Promise<LocalVideoTrack>;

export { AudioTrack } from './AudioTrack';
export { LocalTrack, RemoteTrack, LogLevel, LogLevels } from './types';
export { LocalAudioTrack } from './LocalAudioTrack';
export { LocalAudioTrackPublication } from './LocalAudioTrackPublication';
export { LocalDataTrack } from './LocalDataTrack';
export { LocalDataTrackPublication } from './LocalDataTrackPublication';
export { LocalParticipant } from './LocalParticipant';
export { LocalTrackPublication } from './LocalTrackPublication';
export { LocalVideoTrack } from './LocalVideoTrack';
export { LocalVideoTrackPublication } from './LocalVideoTrackPublication';
export { Participant } from './Participant';
export { RemoteAudioTrack } from './RemoteAudioTrack';
export { RemoteAudioTrackPublication } from './RemoteAudioTrackPublication';
export { RemoteDataTrack } from './RemoteDataTrack';
export { RemoteDataTrackPublication  } from './RemoteDataTrackPublication';
export { RemoteParticipant } from './RemoteParticipant';
export { RemoteTrackPublication } from './RemoteTrackPublication';
export { RemoteVideoTrack } from './RemoteVideoTrack';
export { RemoteVideoTrackPublication  } from './RemoteVideoTrackPublication';
export { Room } from './Room';
export { Track } from './Track';
export { TrackPublication } from './TrackPublication';
export { TwilioError } from './TwilioError';
export { VideoTrack } from './VideoTrack';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Long: any;
  Time: any;
};







export type Comment = {
  __typename?: 'Comment';
  post?: Maybe<Post>;
  author?: Maybe<User>;
  _id: Scalars['ID'];
  message: Scalars['String'];
  created: Scalars['Date'];
  _ts: Scalars['Long'];
};

export type CommentAuthorRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type CommentInput = {
  author?: Maybe<CommentAuthorRelation>;
  message: Scalars['String'];
  post?: Maybe<CommentPostRelation>;
  created: Scalars['Date'];
};

export type CommentPage = {
  __typename?: 'CommentPage';
  data: Array<Maybe<Comment>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type CommentPostRelation = {
  create?: Maybe<PostInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type CreateUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  dob: Scalars['Date'];
  location?: Maybe<Scalars['String']>;
};


export type Follower = {
  __typename?: 'Follower';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  follower: User;
  following: User;
};

export type FollowerFollowerRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
};

export type FollowerFollowingRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
};

export type FollowerInput = {
  follower?: Maybe<FollowerFollowerRelation>;
  following?: Maybe<FollowerFollowingRelation>;
};

export type FollowerPage = {
  __typename?: 'FollowerPage';
  data: Array<Maybe<Follower>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type Like = {
  __typename?: 'Like';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  author?: Maybe<User>;
  post?: Maybe<Post>;
};

export type LikeAuthorRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type LikeInput = {
  author?: Maybe<LikeAuthorRelation>;
  post?: Maybe<LikePostRelation>;
};

export type LikePage = {
  __typename?: 'LikePage';
  data: Array<Maybe<Like>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type LikePostRelation = {
  create?: Maybe<PostInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type LoginUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type Message = {
  __typename?: 'Message';
  dest?: Maybe<User>;
  readed?: Maybe<Scalars['Boolean']>;
  author?: Maybe<User>;
  _id: Scalars['ID'];
  message: Scalars['String'];
  _ts: Scalars['Long'];
};

export type MessageAuthorRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type MessageDestRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type MessageInput = {
  author?: Maybe<MessageAuthorRelation>;
  dest?: Maybe<MessageDestRelation>;
  message: Scalars['String'];
  readed?: Maybe<Scalars['Boolean']>;
};

export type MessagePage = {
  __typename?: 'MessagePage';
  data: Array<Maybe<Message>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteShoutout?: Maybe<Shoutout>;
  deleteLike?: Maybe<Like>;
  updateUser?: Maybe<User>;
  deletePostInteractions?: Maybe<PostInteractions>;
  createUser: User;
  deletePostStats?: Maybe<PostStats>;
  createLike: Like;
  updateFollower?: Maybe<Follower>;
  updatePostStats?: Maybe<PostStats>;
  updateComment?: Maybe<Comment>;
  createFollower: Follower;
  updateShoutout?: Maybe<Shoutout>;
  deleteComment?: Maybe<Comment>;
  updatePost?: Maybe<Post>;
  deleteFollower?: Maybe<Follower>;
  updateMessage?: Maybe<Message>;
  createPostStats: PostStats;
  loginUser: Scalars['String'];
  createMessage: Message;
  createShoutout: Shoutout;
  deleteMessage?: Maybe<Message>;
  createComment: Comment;
  deleteUser?: Maybe<User>;
  deletePost?: Maybe<Post>;
  createPost: Post;
  createPostInteractions: PostInteractions;
  updatePostInteractions?: Maybe<PostInteractions>;
  updateLike?: Maybe<Like>;
};


export type MutationDeleteShoutoutArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLikeArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};


export type MutationDeletePostInteractionsArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationDeletePostStatsArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLikeArgs = {
  data: LikeInput;
};


export type MutationUpdateFollowerArgs = {
  id: Scalars['ID'];
  data: FollowerInput;
};


export type MutationUpdatePostStatsArgs = {
  id: Scalars['ID'];
  data: PostStatsInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  data: CommentInput;
};


export type MutationCreateFollowerArgs = {
  data: FollowerInput;
};


export type MutationUpdateShoutoutArgs = {
  id: Scalars['ID'];
  data: ShoutoutInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  data: PostInput;
};


export type MutationDeleteFollowerArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateMessageArgs = {
  id: Scalars['ID'];
  data: MessageInput;
};


export type MutationCreatePostStatsArgs = {
  data: PostStatsInput;
};


export type MutationLoginUserArgs = {
  input?: Maybe<LoginUserInput>;
};


export type MutationCreateMessageArgs = {
  data: MessageInput;
};


export type MutationCreateShoutoutArgs = {
  data: ShoutoutInput;
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePostArgs = {
  input?: Maybe<PostInput>;
};


export type MutationCreatePostInteractionsArgs = {
  data: PostInteractionsInput;
};


export type MutationUpdatePostInteractionsArgs = {
  id: Scalars['ID'];
  data: PostInteractionsInput;
};


export type MutationUpdateLikeArgs = {
  id: Scalars['ID'];
  data: LikeInput;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  shoutouts?: Maybe<Scalars['Int']>;
  _id: Scalars['ID'];
  text: Scalars['String'];
  likes?: Maybe<Scalars['Int']>;
  created: Scalars['Date'];
  comments?: Maybe<Scalars['Int']>;
  _ts: Scalars['Long'];
};

export type PostAuthorRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
};

export type PostInput = {
  text: Scalars['String'];
};

export type PostInteractions = {
  __typename?: 'PostInteractions';
  post?: Maybe<Post>;
  _id: Scalars['ID'];
  shoutout?: Maybe<Scalars['Boolean']>;
  comment?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  like?: Maybe<Scalars['Boolean']>;
  _ts: Scalars['Long'];
};

export type PostInteractionsInput = {
  post: Scalars['ID'];
};

export type PostInteractionsPage = {
  __typename?: 'PostInteractionsPage';
  data: Array<Maybe<PostInteractions>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type PostInteractionsPostRelation = {
  create?: Maybe<PostInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type PostInteractionsUserRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type PostPage = {
  __typename?: 'PostPage';
  data: Array<Maybe<Post>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type PostStats = {
  __typename?: 'PostStats';
  post?: Maybe<Post>;
  shoutouts?: Maybe<Scalars['Int']>;
  _id: Scalars['ID'];
  likes?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
  comments?: Maybe<Scalars['Int']>;
  _ts: Scalars['Long'];
};

export type PostStatsInput = {
  post?: Maybe<Scalars['ID']>;
};

export type PostStatsPage = {
  __typename?: 'PostStatsPage';
  data: Array<Maybe<PostStats>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type PostStatsPostRelation = {
  create?: Maybe<PostInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  findShoutoutByID?: Maybe<Shoutout>;
  findFollowerByID?: Maybe<Follower>;
  getPosts: PostPage;
  getFollowers: FollowerPage;
  findPostByID?: Maybe<Post>;
  getLikes: LikePage;
  getShoutouts: ShoutoutPage;
  getUserByUsername?: Maybe<User>;
  getComments: CommentPage;
  findUserByID?: Maybe<User>;
  findPostStatsByID?: Maybe<PostStats>;
  findLikeByID?: Maybe<Like>;
  getMessages: MessagePage;
  findPostInteractionsByID?: Maybe<PostInteractions>;
  findCommentByID?: Maybe<Comment>;
  getPostInteractions?: Maybe<PostInteractions>;
  getUsers: UserPage;
  findMessageByID?: Maybe<Message>;
  getPostStatsByPost?: Maybe<PostStats>;
  getPostStats: PostStatsPage;
};


export type QueryFindShoutoutByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindFollowerByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryGetFollowersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindPostByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetLikesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryGetShoutoutsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryGetCommentsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindPostStatsByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindLikeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetMessagesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindPostInteractionsByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindCommentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostInteractionsArgs = {
  input?: Maybe<PostInteractionsInput>;
};


export type QueryGetUsersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindMessageByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostStatsByPostArgs = {
  input?: Maybe<PostStatsInput>;
};


export type QueryGetPostStatsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

export type Shoutout = {
  __typename?: 'Shoutout';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  author?: Maybe<User>;
  post?: Maybe<Post>;
};

export type ShoutoutAuthorRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type ShoutoutInput = {
  author?: Maybe<ShoutoutAuthorRelation>;
  post?: Maybe<ShoutoutPostRelation>;
};

export type ShoutoutPage = {
  __typename?: 'ShoutoutPage';
  data: Array<Maybe<Shoutout>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type ShoutoutPostRelation = {
  create?: Maybe<PostInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};


export type User = {
  __typename?: 'User';
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  dob: Scalars['Date'];
  _id: Scalars['ID'];
  created: Scalars['Date'];
  _ts: Scalars['Long'];
};

export type UserInput = {
  username: Scalars['String'];
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  dob: Scalars['Date'];
  location?: Maybe<Scalars['String']>;
  created: Scalars['Date'];
};

export type UserPage = {
  __typename?: 'UserPage';
  data: Array<Maybe<User>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

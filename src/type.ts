export type TodoType = {
  id: number;
  content: string;
  isComplete: boolean;
}

export type CommentType = {
	id: number;
	content: string;
	author: string;
	userId: number;
	postId: number;
	createdAt: string;
};

export type PostType = {
  id: number;
	postType: 'Notice' | 'Question';
	title: string;
	author: string;
	userId: number;
	createdAt: string;
	content: string;
	comments?: CommentType[];
};

export type PostsType = {
	notice: PostType[];
	question: PostType[];
	pages: number;
};

export type CardType = {
	id: number;
	title: string;
	teacher: string;
	imageUrl: string;
	timeTable: string[];
	state: 'wait' | 'accepted' | 'teach';
};
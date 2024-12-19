'use client';

import { useState } from "react";

export default function SearchForm () {
	const [keyword, setKeyword] = useState('');
	return (
		<>
			<input type="text" onChange={e => setKeyword(e.target.value)} placeholder="검색어를 입력해주세요" />
			<button type="button">검색</button>
		</>
	)
}
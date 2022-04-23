import React from "react";

export default function Confirm(props) {
  return (
    <div class="confirm--comment">
      <h4>✋You are about to comment on someone's post</h4>
      <ul class="confirm--checks">
        How will it make the owner of this post feel?
        <li>💛 Is it kind?</li>
        <li>✅ Is it true?</li>
        <li>🐝 Is it necessary?</li>
      </ul>
      <section>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSubmit}>Comment</button>
      </section>
    </div>
  );
}

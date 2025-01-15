"use client";

import { Textarea } from "@/components/ui/textarea";

export default function BackStory() {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <h1>
        Personal Description
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>

      <h1>
        Ideology/Beliefs
        <Textarea
          className="placeholder:text-slate-500"
          placeholder="Write the ideologies of your character here."
        />
      </h1>
      <h1>
        Significant People
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>
      <h1>
        Meaningful Locations
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>
      <h1>
        Treasured Possessions
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>
      <h1>
        Traits
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>
      <h1>
        Injuries & Scars
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>
      <h1>
        Phobias & Manias
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>
      <h1>
        Arcane Tomes & Artifacts
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>
      <h1>
        Encounters with Strange Entities
        <Textarea
          className="placeholder:text-slate-500 resize-none overflow-hidden"
          placeholder="Write who are the significant people for your character here."
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto"; // Reset height to auto to calculate the new height
            target.style.height = `${target.scrollHeight}px`; // Set height to scrollHeight
          }}
        />
      </h1>
    </div>
  );
}
